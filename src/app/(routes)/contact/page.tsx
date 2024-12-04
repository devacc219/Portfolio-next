import { strings } from '@/lib/strings'
// import { SocialIcons } from '@/components/social-icons'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col justify-between py-16">
      <div className="flex-1 grid md:grid-cols-2 gap-8">
        <div>
          <h1 className="text-2xl font-bold mb-8">{strings.contact.title}</h1>
          <p className="mb-8">{strings.contact.description}</p>
          <div className="space-y-4">
            {/* <p>
              <strong>{strings.contact.phone.label}</strong><br />
              {strings.contact.phone.value}
            </p> */}
            <p>
              <strong>{strings.contact.email.label}</strong><br />
              {strings.contact.email.value}
            </p>
          </div>
        </div>
        <form className="space-y-4">
          <Input
            type="text"
            placeholder={strings.contact.form.namePlaceholder}
            className="bg-background border-foreground/20"
            required
          />
          <Input
            type="email"
            placeholder={strings.contact.form.emailPlaceholder}
            className="bg-background border-foreground/20"
            required
          />
          <Textarea
            placeholder={strings.contact.form.messagePlaceholder}
            className="bg-background border-foreground/20 min-h-[150px]"
            required
          />
          <Button type="submit" className="w-full">
            {strings.contact.form.submitButton}
          </Button>
        </form>
      </div>
      {/* <SocialIcons /> */}
    </div>
  )
}

