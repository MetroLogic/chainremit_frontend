"use client"

import React, { useEffect, useMemo } from "react";
import {
    ArrowDownIcon,
    SendIcon,
} from "lucide-react";
import { z } from "zod";

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { WalletInjectedProps } from "./wallet-wrapper";

const currencies  = z.enum(["USDC", "ETH", "STRK"])

const addressSchema = z
  .string()
  .refine((val) => {
    const isHex = /^0x[0-9a-fA-F]+$/.test(val);
    const isStarkDomain = val.endsWith('.stark');
    return isHex || isStarkDomain;
  }, {
    message: 'Address must be a valid 0x hex or end with .stark',
  });

const amountSchema = z
  .string()
  .refine((val) => val.trim() !== '', {
    message: 'Amount cannot be empty',
  })
  .transform((val) => val.replace(',', '.'))
  .refine((val) => !isNaN(Number(val)), {
    message: 'Amount must be a valid number',
  })
  .transform((val) => Number(val))
  .refine((val) => val >= 0, {
    message: 'Amount must be non-negative',
  });

const sendSchema = z.object({
  recipient_address: addressSchema,
  amount: amountSchema,
  currency: currencies,
  message: z.string().optional()
}).required();

interface RecentRecipient {
  name: string;
  id: string;
  amount: string;
}

type ISend = WalletInjectedProps & {
 recentRecipients: RecentRecipient[] 
}

export const Send: React.FC<ISend> = ({ 
  recentRecipients, 
  tokenBalances,
  currentCurrencies,
  isConnected 
}) => {

  const { register, handleSubmit, watch, formState: { errors, isValid, isDirty }, getValues, setValue, setError } = useForm({
    resolver: zodResolver(sendSchema) 
  });

  const onSubmit = (data: z.infer<typeof sendSchema>) => {
    console.log({ data })
  }

  const tokenWatcher = watch('currency')
  const amountWatcher = watch('amount')

  const { isBalanceAvailable, maxBalance } = useMemo(() => {

    let isBalanceAvailable = false;
    // @ts-ignore
    let balance = 0n;

    const currentCurrency = getValues("currency")

    const currentTokenData = currentCurrencies?.[currentCurrency]

    const tokenBalance = tokenBalances?.find(balance => balance?.tokenAddress?.toLowerCase() === currentTokenData?.address?.toLowerCase())

    try {
      if(tokenBalance && tokenBalance?.balance && tokenBalance?.decimals) {
        isBalanceAvailable = true;
        // @ts-ignore
        balance = parseFloat(tokenBalance?.balance ?? 0n) / parseFloat(10n ** BigInt(tokenBalance?.decimals ?? 1))
      }
    } catch(e) {
      console.warn(e)
    }

    return {
      isBalanceAvailable,
      maxBalance: balance
    }
  }, [tokenWatcher, tokenBalances])

  useEffect(() => {
    setValue('amount', (0)?.toString(), {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  }, [tokenWatcher])

  useEffect(() => {
    const currentAmount = getValues('amount')
    const currentAmountNum = parseFloat(currentAmount)
    if(!Number.isNaN(currentAmountNum)) {
      if(currentAmountNum > maxBalance) {
        setError('amount', {
          type: 'manual', // or 'custom'
          message: 'Amount can\'t be more than balance.',
        });
      } else {
        setError('amount', {
          type: 'manual', // or 'custom'
          message: undefined,
        });
      }
    } else {
      setError('amount', {
        type: 'manual', // or 'custom'
        message: undefined,
      });
    }
  }, [amountWatcher, maxBalance])

  const handleMaxAmount = () => {
    setValue('amount', (maxBalance ?? 0)?.toString(), {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  }

  if(!isConnected) {
    return <div className="flex flex-col items-center">
      <div className="space-y-6 w-[600px] max-w-[600px]">
        <div>
          <h1 className="text-2xl font-semibold">Connect Wallet</h1>
          <h3 className="text-md font-light opacity-65">Connect your wallet to send money</h3>
        </div>
      </div>
    </div>
  }

  return (
    <div className="flex flex-col items-center">
    <div className="space-y-6 w-[600px] max-w-[600px]">
      <div>
        <h1 className="text-2xl font-semibold">Send Money</h1>
        <h3 className="text-md font-light opacity-65">Transfer funds instantly across the globe</h3>
      </div>
        <form onSubmit={handleSubmit(onSubmit)}>
      <div className="rounded-lg border border-gray-800 dark:border-gray-300 p-6 space-y-4">
        <div className="flex flex-col justify-center items-start">
          <h2 className="text-xl font-medium">Send Funds</h2>
          <h2 className="text-sm font-light mb-4 opacity-65">Enter recipient details and amount to transfer</h2>
        </div>
        <div>
          <label className="block text-sm font-medium">Recipient Address or StarkNet ID</label>
          <input
            className="w-full rounded border border-gray-300 dark:border-gray-800 px-3 py-2 bg-transparent mt-1"
            placeholder="0x... or username.stark"
            {...register("recipient_address", { required: true })}
          />
          {errors.recipient_address?.message && <p className="text-sm text-red-700">{errors?.recipient_address?.message}</p>}
        </div>

        <div className="flex gap-2">
          <div className="flex-1 w-[50%]">
            <div className="flex justify-between">
                  <label className="block text-sm font-medium">Amount</label>
                  { 
                    isBalanceAvailable && <button
                      className="px-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 bg-transparent rounded-sm hover:border-gray-400 dark:hover:border-gray-500 hover:text-gray-900 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 transition text-[10px]"
                      onClick={(e) => {
                        e.preventDefault()
                        handleMaxAmount()
                      }}
                    >
                      MAX 
                    </button>
                  }
            </div>
            <input
              className="w-full rounded border border-gray-300 dark:border-gray-800 px-3 py-2 bg-transparent mt-1"
              placeholder="0.00"
              type="text"
              pattern="[0-9]*[.,]?[0-9]*"
              {...register("amount", { required: true })}
            />
            {errors.amount?.message && <p className="text-sm text-red-700">{errors?.amount?.message}</p>}
          </div>
          <div className="w-[50%]">
            <label className="block text-sm font-medium">Currency</label>
            <div className="relative mt-1">
                  <select
                    defaultValue="USDC"
                    className="appearance-none w-full h-[43px] rounded border  border-gray-300 dark:border-gray-800 px-3 py-2 bg-transparent pr-8"
                    {...register("currency", { required: true })}
                  >
                    {Object.keys(currentCurrencies ?? {}).map(key => {
                      return <option value={key}>{key}</option>
                    })}
                  </select>
              <div className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2">
                <ArrowDownIcon size={16} />
              </div>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium">Message (Optional)</label>
          <textarea
            className="w-full rounded border border-gray-300 dark:border-gray-800 px-3 py-2 bg-transparent mt-1"
            placeholder="Add a note for the recipient..."
            rows={3}
            {...register("message", { required: true })}
          />
        </div>

        <button 
            className="w-full bg-gray-300 text-gray-800 dark:text-gray-200 dark:bg-gray-700 font-semibold py-2 rounded hover:bg-gray-400 dark:hover:bg-gray-800  flex items-center justify-center gap-2 disabled:opacity-65"
            type="submit"
        >
          <SendIcon size={18} /> Send Funds
        </button>
      </div>
      </form>

      <div className="rounded-lg border border-gray-800 dark:border-gray-300 p-6">
        <h2 className="text-lg font-semibold">Recent Recipients</h2>
        <p className="text-sm font-light mb-4 opacity-65">Quick send to your frequent contacts</p>
        <div className="space-y-3">
          {recentRecipients.map((recipient, i) => (
            <div
              key={i}
              className="flex items-center gap-4 rounded-md border border-gray-800 dark:border-gray-300 p-3 bg-transparent"
            >
              <div className="bg-blue-800/10 p-2 rounded-md">
                <SendIcon className="text-blue-600/50" size={20} />
              </div>
              <div className="flex-1">
                <div className="font-medium">{recipient.name}</div>
                <div className="text-sm">{recipient.id}</div>
              </div>
              <div className="flex flex-col justify-end items-end">
                  <div className="text-sm">Last sent</div>
                  <div className="text-sm">{recipient.amount}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};
