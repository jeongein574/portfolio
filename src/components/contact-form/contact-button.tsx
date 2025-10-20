import { useEffect, useRef, useState } from "react";
import { MailIcon } from "lucide-react";
import FloatingMailButton, {
  floatingMailButtonoptions,
} from "@/components/contact-form/floating-mail-button";
import ContactFormModal from "@/components/contact-form/contact-form-modal";

export default function ContactButton() {
  const refSendBtn = useRef<HTMLButtonElement>(null);
  const [isBtnVisible, setIsBtnVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const observerCallback = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    setIsBtnVisible(!entry.isIntersecting);
  };

  useEffect(() => {
    const btn = refSendBtn.current;
    const observer = new IntersectionObserver(
      observerCallback,
      floatingMailButtonoptions,
    );
    if (btn) observer.observe(btn);
    return () => {
      if (btn) observer.unobserve(btn);
    };
  }, [refSendBtn]);

  return (
    <>
      {isBtnVisible && !showModal && (
        <FloatingMailButton openModal={setShowModal as any} />
      )}
      <button
        ref={refSendBtn}
        className="inline-flex items-center gap-2 rounded-md bg-background px-3 py-2 text-accent transition-transform duration-150 focus-within:scale-[1.05] hover:scale-[1.05] hover:bg-foreground hover:text-background"
        onClick={() => setShowModal(true)}
      >
        <MailIcon className="h-4 w-4 sm:h-5 sm:w-5 lg:h-7 lg:w-7" />
        <span className="text-base font-semibold sm:text-sm lg:text-lg">
          SEND MESSAGE
        </span>
      </button>
      <ContactFormModal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
}
