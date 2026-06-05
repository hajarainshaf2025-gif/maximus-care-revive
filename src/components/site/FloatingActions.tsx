import { MessageCircle, Phone } from "lucide-react";
import { SITE } from "@/lib/site";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href={`https://wa.me/${SITE.whatsapp}`}
        aria-label={`Chat on WhatsApp ${SITE.whatsappDisplay}`}
        title={`WhatsApp ${SITE.whatsappDisplay}`}
        className="grid h-14 w-14 place-items-center rounded-full bg-success text-success-foreground shadow-glow hover:scale-110 transition-transform"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <a
        href={`https://wa.me/${SITE.whatsapp2}`}
        aria-label={`Chat on WhatsApp ${SITE.whatsapp2Display}`}
        title={`WhatsApp ${SITE.whatsapp2Display}`}
        className="grid h-14 w-14 place-items-center rounded-full bg-success text-success-foreground shadow-glow hover:scale-110 transition-transform"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <a
        href={`tel:${SITE.phoneIntl}`}
        aria-label="Call now"
        className="grid h-14 w-14 place-items-center rounded-full bg-gradient-accent text-accent-foreground shadow-glow hover:scale-110 transition-transform"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}
