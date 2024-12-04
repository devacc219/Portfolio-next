import { skills } from '@/lib/skills'
import Image from 'next/image'
// import { SocialIcons } from '@/components/social-icons'

export default function Skills() {
  return (
    <div className="min-h-screen flex flex-col justify-between py-16">
      <div className="flex-1">
        <h1 className="text-2xl font-bold mb-8">{skills.title}</h1>
        <div className="space-y-8">
          <p className="text-xl">{skills.description}</p>
          <ul className="list-disc list-inside space-y-2">
            {skills.list.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 mt-8">
            {skills.icons.map((icon, index) => (
              <div key={index} className="flex justify-center">
                <Image src={icon} alt="Skill icon" width={50} height={50} />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <SocialIcons /> */}
    </div>
  )
}

