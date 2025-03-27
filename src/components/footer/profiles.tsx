import { Avatar, AvatarFallback } from '@/components/ui/avatar'

const Profiles = ({ initials }: { initials: string }) => {
  return (
    <Avatar>
      <AvatarFallback className="bg-orange-400 border border-orange-800 text-sm text-orange-950">
        {initials}
      </AvatarFallback>
    </Avatar>
  )
}

export default Profiles
