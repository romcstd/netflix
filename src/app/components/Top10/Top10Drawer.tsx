"use client";

import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerClose } from "@/components/ui/drawer";
import { FaXmark } from "react-icons/fa6";
import { ShowItem } from "./types";
import Top10DialogDrawerContent from "./Top10DialogDrawerContent";

export default function Top10Drawer({
    selectedShow,
    onClose,
}: {
    selectedShow: ShowItem;
    onClose: () => void;
}) {
    return (
        <Drawer open={!!selectedShow} onOpenChange={onClose}>
            <DrawerContent className="max-h-[90dvh] overflow-y-auto bg-background rounded-t-lg">
                <DrawerHeader className="flex items-center justify-between px-6 py-4 border-b bg-background">
                    <DrawerTitle className="text-2xl font-bold">{selectedShow.name}</DrawerTitle>
                    <DrawerClose className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none">
                        <FaXmark className="w-5 h-5" />
                    </DrawerClose>
                </DrawerHeader>
                <Top10DialogDrawerContent selectedShow={selectedShow} />
            </DrawerContent>
        </Drawer>
    );
}