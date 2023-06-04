import { Popover, Transition } from "@headlessui/react";
import React, { Fragment } from "react";

import IconNotificationOn from "@/icons/IconNotificationOn";
import { NotificationSettings } from "@/components/notifications/NotificationSettings";

export const NotificationsButton = ({
  openDirection = "left",
  showLabel = false,
}: {
  openDirection?: "left" | "right";
  showLabel?: boolean;
}) => {
  return (
    <Popover as="div" className="relative flex items-center self-stretch">
      <Popover.Button className="flex gap-2 rounded-lg p-2">
        <IconNotificationOn />
        <span className={`sr-only ${showLabel ? "md:not-sr-only" : ""}`}>
          Push Notifications on this device
        </span>
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Popover.Panel
          className={`absolute ${
            openDirection === "left" ? "right-0" : "left-0"
          } top-full z-30 -mt-0.5 w-[320px] max-w-[calc(80vw-50px)] rounded border border-black/20 bg-alveus-green-900 text-gray-200 shadow-lg`}
        >
          <NotificationSettings />
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};
