"use client"

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Switch } from '@/components/ui/switch'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useToast } from '@/components/ui/use-toast'
import config from '@/config'
import { type UserResource } from '@clerk/types'
import { useUser } from '@clerk/nextjs'
import { Loader2, Mail, Pencil, Save, Settings2, User, X } from 'lucide-react'
import { useTheme } from 'next-themes'
import React from 'react'
import { useState } from 'react'

interface NotificationSettings {
  emailNotifications: boolean
  marketplaceUpdates: boolean
  priceChanges: boolean
  inventoryAlerts: boolean
}

interface ProfileFormData {
  firstName: string
  lastName: string
  phone: string
  company: string
}

export default function Settings() {
  const { toast } = useToast()
  const { theme, setTheme } = useTheme()
  const [isEditing, setIsEditing] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [profileData, setProfileData] = useState<ProfileFormData>({
    firstName: '',
    lastName: '',
    phone: '',
    company: '',
  })
  const [notifications, setNotifications] = React.useState<NotificationSettings>({
    emailNotifications: true,
    marketplaceUpdates: true,
    priceChanges: true,
    inventoryAlerts: true,
  })

  const { user, isLoaded } = useUser()
  const isLoading = !isLoaded

  // Initialize profile data when user data is loaded
  React.useEffect(() => {
    if (user) {
      setProfileData({
        firstName: user.firstName ?? '',
        lastName: user.lastName ?? '',
        phone: user.phoneNumbers?.[0]?.phoneNumber ?? '',
        company: user.publicMetadata?.company as string ?? '',
      })
    }
  }, [user])

  const handleNotificationChange = (key: keyof NotificationSettings) => {
    setNotifications((prev) => {
      const newSettings = { ...prev, [key]: !prev[key] }
      return newSettings
    })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSaveProfile = async () => {
    try {
      setIsSaving(true)
      // Here you would typically update the user's profile
      // await user?.update({
      //   firstName: profileData.firstName,
      //   lastName: profileData.lastName,
      //   // Add other fields as needed
      // })

      toast({
        title: "Profile updated",
        description: "Your profile has been updated successfully.",
      })
      setIsEditing(false)
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update profile. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSaving(false)
    }
  }

  const handleCancelEdit = () => {
    if (user) {
      setProfileData({
        firstName: user.firstName ?? '',
        lastName: user.lastName ?? '',
        phone: user.phoneNumbers?.[0]?.phoneNumber ?? '',
        company: user.publicMetadata?.company as string ?? '',
      })
    }
    setIsEditing(false)
  }

  const handleSaveChanges = async () => {
    try {
      toast({
        title: "Settings saved",
        description: "Your preferences have been updated successfully.",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save settings. Please try again.",
        variant: "destructive",
      })
    }
  }

  if (isLoading) {
    return (
      <div className="flex h-[50vh] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList>
          <TabsTrigger value="profile" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            Profile
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="preferences" className="flex items-center gap-2">
            <Settings2 className="h-4 w-4" />
            Preferences
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div>
                <CardTitle>Profile Settings</CardTitle>
                <CardDescription>
                  Manage your personal information and account settings.
                </CardDescription>
              </div>
              {!isEditing ? (
                <Button
                  onClick={() => setIsEditing(true)}
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <Pencil className="h-4 w-4" />
                  Edit Profile
                </Button>
              ) : (
                <div className="flex items-center gap-2">
                  <Button
                    onClick={handleSaveProfile}
                    size="sm"
                    disabled={isSaving}
                    className="flex items-center gap-2"
                  >
                    {isSaving ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Save className="h-4 w-4" />
                    )}
                    Save
                  </Button>
                  <Button
                    onClick={handleCancelEdit}
                    variant="outline"
                    size="sm"
                    disabled={isSaving}
                    className="flex items-center gap-2"
                  >
                    <X className="h-4 w-4" />
                    Cancel
                  </Button>
                </div>
              )}
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    disabled={!isEditing}
                    value={profileData.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    disabled={!isEditing}
                    value={profileData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  disabled
                  defaultValue={user?.emailAddresses?.[0]?.emailAddress ?? ""}
                  placeholder="Email"
                />
                <p className="text-sm text-gray-500">
                  Email cannot be changed. Contact support if you need to update it.
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  disabled={!isEditing}
                  value={profileData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company Name</Label>
                <Input
                  id="company"
                  name="company"
                  disabled={!isEditing}
                  value={profileData.company}
                  onChange={handleInputChange}
                  placeholder="Company Name"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>
                Choose what updates you want to receive.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Email Notifications</Label>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Receive notifications via email
                    </p>
                  </div>
                  <Switch
                    checked={notifications.emailNotifications}
                    onCheckedChange={() => handleNotificationChange('emailNotifications')}
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Marketplace Updates</Label>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Get notified about marketplace changes
                    </p>
                  </div>
                  <Switch
                    checked={notifications.marketplaceUpdates}
                    onCheckedChange={() => handleNotificationChange('marketplaceUpdates')}
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Price Changes</Label>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Notifications for price changes in your listings
                    </p>
                  </div>
                  <Switch
                    checked={notifications.priceChanges}
                    onCheckedChange={() => handleNotificationChange('priceChanges')}
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Inventory Alerts</Label>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Get notified about low inventory
                    </p>
                  </div>
                  <Switch
                    checked={notifications.inventoryAlerts}
                    onCheckedChange={() => handleNotificationChange('inventoryAlerts')}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="preferences">
          <Card>
            <CardHeader>
              <CardTitle>App Preferences</CardTitle>
              <CardDescription>
                Customize your app experience.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Theme</Label>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Choose your preferred theme
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant={theme === 'light' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setTheme('light')}
                  >
                    Light
                  </Button>
                  <Button
                    variant={theme === 'dark' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setTheme('dark')}
                  >
                    Dark
                  </Button>
                  <Button
                    variant={theme === 'system' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setTheme('system')}
                  >
                    System
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-6 flex justify-end">
        <Button onClick={handleSaveChanges}>Save Changes</Button>
      </div>
    </div>
  )
}
