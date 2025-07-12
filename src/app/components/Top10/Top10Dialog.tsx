"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { FaXmark } from "react-icons/fa6";
import { ShowItem } from "./types";
import Top10DialogDrawerContent from "./Top10DialogDrawerContent";

export default function Top10Dialog({
    selectedShow,
    onClose,
}: {
    selectedShow: ShowItem | null;
    onClose: () => void;
}) {
    return (
        <Dialog open={!!selectedShow} onOpenChange={onClose}>
            <DialogContent id="dialog-content" className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl w-full max-h-full rounded-lg p-0 bg-background border-0 gap-0 flex flex-col">
                <DialogHeader id="dialog-header" className="relative top-0 z-10 flex items-center justify-between px-6 py-4 border-b bg-background rounded-t-lg">
                    <DialogTitle id="dialog-title" className="text-2xl font-bold text-foreground">
                        {selectedShow?.name}
                    </DialogTitle>
                    <DialogClose id="dialog-close" className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-0">
                        <FaXmark className="w-5 h-5" />
                    </DialogClose>
                </DialogHeader>
                <Top10DialogDrawerContent selectedShow={selectedShow} />
            </DialogContent>
        </Dialog>
    );
}