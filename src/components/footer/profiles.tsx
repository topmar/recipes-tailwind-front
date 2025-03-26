import { Avatar, AvatarFallback } from '@/components/ui/avatar'

const Profiles = ({ initials }: { initials: string }) => {
  return (
    <Avatar>
      <AvatarFallback className="bg-orange-300">{initials}</AvatarFallback>
    </Avatar>
  )
}

export default Profiles
