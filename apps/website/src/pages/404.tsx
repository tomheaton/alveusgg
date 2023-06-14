import { type NextPage } from "next";
import React from "react";

import Heading from "@/components/content/Heading";
import Meta from "@/components/content/Meta";
import Section from "@/components/content/Section";

// TODO: remove this!
import IconGlobe from "@/icons/IconGlobe";
import IconPencil from "@/icons/IconPencil";
import IconSync from "@/icons/IconSync";
import IconXCircle from "@/icons/IconXCircle";
import IconTrash from "@/icons/IconTrash";
import IconEye from "@/icons/IconEye";
import IconShare from "@/icons/IconShare";
import IconEllipsis from "@/icons/IconEllipsis";
import IconWarningTriangle from "@/icons/IconWarningTriangle";
import IconPlus from "@/icons/IconPlus";
import IconDownload from "@/icons/IconDownload";
import IconUpload from "@/icons/IconUpload";
import IconNotificationAlert from "@/icons/IconNotificationAlert";
import IconMinusCircle from "@/icons/IconMinusCircle";
import IconArchive from "@/icons/IconArchive";
import IconBolt from "@/icons/IconBolt";
import IconXCircleOutline from "@/icons/IconXCircleOutline";
import IconVideoCamera from "@/icons/IconVideoCamera";
import IconMinus from "@/icons/IconMinus";
import IconCheckCircle from "@/icons/IconCheckCircle";
import IconCheck from "@/icons/IconCheck";
import IconX from "@/icons/IconX";
import IconMenu from "@/icons/IconMenu";
import IconInformationCircle from "@/icons/IconInformationCircle";
import IconUploadFiles from "@/icons/IconUploadFiles";
import IconArrowUp from "@/icons/IconArrowUp";
import IconArrowDown from "@/icons/IconArrowDown";
import IconArrowsIn from "@/icons/IconArrowsIn";
import IconArrowsOut from "@/icons/IconArrowsOut";
import IconEnvelope from "@/icons/IconEnvelope";
import IconNotification from "@/icons/IconNotification";
import IconNotificationOff from "@/icons/IconNotificationOff";
import IconNotificationOn from "@/icons/IconNotificationOn";
import IconExternal from "@/icons/IconExternal";
import IconCalendar from "@/icons/IconCalendar";
import IconBox from "@/icons/IconBox";
import IconChevronDown from "@/icons/IconChevronDown";
import IconChevronUp from "@/icons/IconChevronUp";
import IconChevronLeft from "@/icons/IconChevronLeft";
import IconChevronRight from "@/icons/IconChevronRight";

const NotFound: NextPage = () => {
  return (
    <>
      <Meta
        title="404 - Page Not Found"
        description="The page you are looking could not be found."
      />

      {/* Nav background */}
      <div className="-mt-40 hidden h-40 bg-alveus-green-900 lg:block" />

      {/* Grow the last section to cover the page */}
      <Section className="flex-grow">
        <Heading>404 - Page Not Found</Heading>
      </Section>

      {/* TODO: remove this! */}
      <IconGlobe className="h-20 w-20 text-red-500" />
      <IconSync className="h-20 w-20 text-red-500" />
      <IconPencil className="h-20 w-20 text-red-500" />
      <IconXCircle className="h-20 w-20 text-red-500" />
      <IconTrash className="h-20 w-20 text-red-500" />
      <IconEye className="h-20 w-20 text-red-500" />
      <IconShare className="h-20 w-20 text-red-500" />
      <IconEllipsis className="h-20 w-20 text-red-500" />
      <IconWarningTriangle className="h-20 w-20 text-red-500" />
      <IconPlus className="h-20 w-20 text-red-500" />
      <IconDownload className="h-20 w-20 text-red-500" />
      <IconUpload className="h-20 w-20 text-red-500" />
      <IconNotificationAlert className="h-20 w-20 text-red-500" />
      <IconMinusCircle className="h-20 w-20 text-red-500" />
      <IconArchive className="h-20 w-20 text-red-500" />
      <IconBolt className="h-20 w-20 text-red-500" />
      <IconXCircleOutline className="h-20 w-20 text-red-500" />
      <IconVideoCamera className="h-20 w-20 text-red-500" />
      <IconMinus className="h-20 w-20 text-red-500" />
      <IconCheckCircle className="h-20 w-20 text-red-500" />
      <IconCheck className="h-20 w-20 text-red-500" />
      <IconX className="h-20 w-20 text-red-500" />
      <IconMenu className="h-20 w-20 text-red-500" />
      <IconInformationCircle className="h-20 w-20 text-red-500" />
      <IconUploadFiles className="h-20 w-20 text-red-500" />
      <IconArrowUp className="h-20 w-20 text-red-500" />
      <IconArrowDown className="h-20 w-20 text-red-500" />
      <IconArrowsIn className="h-20 w-20 text-red-500" />
      <IconArrowsOut className="h-20 w-20 text-red-500" />
      <IconEnvelope className="h-20 w-20 text-red-500" />
      <br />
      <IconNotification className="h-20 w-20 text-red-500" />
      <IconNotificationOn className="h-20 w-20 text-red-500" />
      <IconNotificationAlert className="h-20 w-20 text-red-500" />
      <IconNotificationOff className="h-20 w-20 text-red-500" />
      <br />
      <IconExternal className="h-20 w-20 text-red-500" />
      <IconEnvelope className="h-20 w-20 text-red-500" />
      <IconCalendar className="h-20 w-20 text-red-500" />
      <IconBox className="h-20 w-20 text-red-500" />
      <IconChevronDown className="h-20 w-20 text-red-500" />
      <IconChevronUp className="h-20 w-20 text-red-500" />
      <IconChevronLeft className="h-20 w-20 text-red-500" />
      <IconChevronRight className="h-20 w-20 text-red-500" />
    </>
  );
};

export default NotFound;
