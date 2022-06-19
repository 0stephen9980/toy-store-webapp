import {
  Box,
  Button,
  IconButton,
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Portal,
} from "@chakra-ui/react";
import { MdQuestionAnswer } from "react-icons/md";
import { useRef } from "react";

export const ServicePopover = () => {
  const initRef = useRef();
  const getOffset = (popper) => {
    // console.log(popper);
    var height = window.outerHeight;
    var width = window.outerWidth;
    var finalHeight = 400 - popper.height;
    console.log(height);
    return [width, height - finalHeight];
  };
  return (
    <Popover closeOnBlur={true} initialFocusRef={initRef}>
      {({ isOpen, onClose }) => (
        <>
          <PopoverTrigger>
            <IconButton
              variant="ghost"
              isRound={true}
              colorScheme="green"
              icon={<MdQuestionAnswer size={20} color="green" />}
            />
          </PopoverTrigger>
          <Portal className=" fixed bottom-0">
            <PopoverContent className="shadow-2xl mr-8 min-h-[10rem]">
              <PopoverHeader>This is the header</PopoverHeader>
              <PopoverCloseButton />
              <PopoverBody>
                <Box>
                  Hello. Nice to meet you! This is the body of the popover
                </Box>
                <Button
                  mt={4}
                  colorScheme="blue"
                  onClick={onClose}
                  ref={initRef}
                >
                  Close
                </Button>
              </PopoverBody>
              <PopoverFooter>This is the footer</PopoverFooter>
            </PopoverContent>
          </Portal>
        </>
      )}
    </Popover>
  );
};
