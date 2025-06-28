"use client";
import ProfileSection from "@/components/profile/profile-section";
import PrivacySection from "@/components/profile/privacy-section";
import ExportSection from "@/components/profile/export-section";
import PreferencesSection from "@/components/profile/preference-section";
import NotificationsSection from "@/components/profile/notification-sectoon";
// import { ThemeToggle } from "@/components/theme-toggle";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white p-4 lg:p-6 transition-colors duration-200">
      <div className="mx-auto">
        <div className="mb-6 lg:mb-8">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold mb-2">
                Profile & Settings
              </h1>
              <p className="text-gray-600 dark:text-gray-400 text-sm lg:text-base">
                Manage your account information and preferences
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8 lg:space-y-12">
          {/* Profile Information Section */}
          <ProfileSection />

          {/* Preferences Section */}
          <div>
            <div className="mb-6">
              <h2 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Preferences
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm lg:text-base">
                Customize your app experience
              </p>
            </div>
            <PreferencesSection />
          </div>

          {/* Notifications Section */}
          <div>
            <div className="mb-6">
              <h2 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Notification Settings
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm lg:text-base">
                Configure how you receive notifications
              </p>
            </div>
            <NotificationsSection />
          </div>

          {/* Export Section */}
          <div>
            <div className="mb-6">
              <h2 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Export & Backup
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm lg:text-base">
                Download your data and create backups
              </p>
            </div>
            <ExportSection />
          </div>

          {/* Privacy Section */}
          <div>
            <div className="mb-6">
              <h2 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Privacy Controls
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm lg:text-base">
                Manage your privacy and data sharing settings
              </p>
            </div>
            <PrivacySection />
          </div>
        </div>
      </div>
    </div>
  );
}
