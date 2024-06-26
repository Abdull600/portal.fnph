import { Separator } from "@/components/ui/separator";
import { Academics } from "./_components/academics";
import { ApplicationDetails } from "./_components/application-details";
import { BiodataDetails } from "./_components/bio-data-details";
import { ExperienceCard } from "./_components/experience-card";
import { PreviewContents } from "./_components/preview-contents";
import { SponsorsCard } from "./_components/sponsor-card";
import { SubmitButton } from "./_components/submit-button";



export const metadata = {
    title: "Preview and Submit",
    description: "Generated by create next app",
};

export default function Preview() {
    return (
        <form className="bg-[#fff] md:rounded-[6px] lg:rounded-[6px] md:m-4 lg:m-4">
            <PreviewContents />
            <Separator className="my-[1px]" />
            <ApplicationDetails />
            <Separator className="my-[1px]" />
            <BiodataDetails />
            <Separator className="my-[1px]" />
            <Academics />
            <Separator className="my-[1px]" />
            <ExperienceCard />
            <Separator className="my-[1px]" />
            <SponsorsCard />
            <Separator className="my-[1px]" />
            <SubmitButton />
        </form>
    )
}