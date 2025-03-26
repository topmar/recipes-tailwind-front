import Image from 'next/image'
import Link from 'next/link'
import Profiles from './profiles'
import LightSwitch from '../light-switch/light-switch'

const Footer = () => {
  return (
    <article className="bg-orange-700 text-white w-full">
      <div className="w-full flex flex-wrap justify-between py-8 min-[574px]:px-24 px-16">
        <section className="max-w-md flex-flex-col">
          <Image
            className="w-40"
            src={'/awesome-recipes-logo.svg'}
            alt="Awesome recipes logo"
            height={100}
            width={100}
          />
          <p className="my-2">
            Awesome Recipes is a collection of tasty recipes from around the
            world. Scroll through our list of recipes or search for your
            favourite and get some inspiration for your next meal.
          </p>
          <h2 className="font-bold mt-4">Follow us!</h2>
          <div className="self-end flex flex-wrap gap-1.5 mt-2">
            <Link href="https://www.linkedin.com/in/ann-w-mathenge/">
              <Profiles initials="AM" />
            </Link>
            <Link href="https://www.linkedin.com/in/marcintopolski/">
              <Profiles initials="MT" />
            </Link>
            <Link href="#">
              <Profiles initials="PM" />
            </Link>
            <Link href="https://www.linkedin.com/in/sandra-h%C3%B6st-kannerberg/">
              <Profiles initials="SK" />
            </Link>
          </div>
        </section>
        <section className="flex flex-col justify-between">
          <ul className="flex flex-col gap-3 font-bold mt-4">
            <li>
              <Link href={'/'}>Home</Link>
            </li>
            <li>
              <Link href={'/recipes'}>Recipes</Link>
            </li>
            <li>
              <Link href={'/login'}>Log in</Link>
            </li>
          </ul>
          <div className="self-end mt-4">
            <LightSwitch />
          </div>
        </section>
      </div>
    </article>
  )
}

export default Footer
