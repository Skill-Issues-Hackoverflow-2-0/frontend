import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { GridBackground } from '@/components/ui/herobg'
import { CardHoverEffectDemo } from '@/components/ui/SecCards'
import { GlobeDemo } from '@/components/ui/thirdglobe'
import { FaGoogle } from 'react-icons/fa'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import axios from 'axios'
import { getUser } from '@/hooks/getUser'
import { useState } from 'react'
import Router from 'next/router'
import { useRouter } from 'next/router'

export default function Component() {
  const user = getUser()
  const [flag, setFlag] = useState<boolean>(true)
  const router = useRouter()
  // if(user === null){
  //   return ()
  // }
  const handleSignin = () => {
    axios
      .post('http://localhost:5000/api/auth/register')
      .then((res) => router.replace(res.data['authUrl']))
    // router.replace(res.data['authUrl']))
    // .catch((err) => console.log('lol'))
    // Assuming response.data contains necessary information after sign-in
    // console.log(response)
    // Redirect to a different page after successful sign-in
    // Change "/dashboard" to the desired route
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="fixed w-full h-screen bg-[url('/bg.png')] -z-10"></div>
      {/* <header className="px-4 lg:px-6 h-14 flex items-center text-gray-100 absolute justify-between"> */}
      {/* <Link className="flex items-center justify-center" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <nav className="ml-auto flex gap-4 justify-end sm:gap-6 ">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Pricing
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            About
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Contact
          </Link>
        </nav>
      </header> */}
      <main className="flex-1 text-gray-50">
        <GridBackground>
          <section className="w-full h-screen py-6 md:py-12 lg:py-24 xl:py-32">
            <div className="container flex flex-col items-center justify-center space-y-4 px-4 md:px-6 text-center xl:space-y-10">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  LOGISHIELD
                </h1>
                <div className="max-w-[600px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed p-2">
                  Your partner in revolutionizing urban governance
                </div>
              </div>
              <div className="space-x-4 flex items-center justify-center">
                <Dialog>
                  <DialogTrigger asChild>
                    <Link
                      className="inline-flex h-12 items-center justify-center rounded-md bg-base-500 px-4 text-sm font-bold text-gray-100 shadow transition-colors hover:bg-base-400"
                      href="#"
                    >
                      Get Started
                    </Link>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px] flex flex-col justify-center items-center">
                    {flag && (
                      <>
                        <DialogHeader className="font-bold">
                          SIGN IN
                        </DialogHeader>
                        <DialogDescription className="flex justify-center flex-col items-center">
                          <Button
                            variant={'default'}
                            className="text-lg shadow-2xl text-black bg-base-200 font-bold gap-2"
                            onClick={handleSignin}
                          >
                            <FaGoogle />
                            Sign In with Google
                          </Button>
                        </DialogDescription>
                      </>
                    )}
                  </DialogContent>
                </Dialog>
                <Link
                  className="inline-flex h-12 items-center justify-center rounded-md bg-gray-50 px-4 py-2 text-sm font-bold text-gray-800 shadow transition-colors"
                  href="#"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </section>
        </GridBackground>

        <section className="w-full container h-screen border-t">
          <div className="max-w-[600px] pl-40 text-gray-200 text-4xl font-bold  mt-12">
            Services offered by us
          </div>
          <CardHoverEffectDemo />
        </section>
        {/* <section className="w-full h-screen border-t">
          <GlobeDemo/>
        </section> */}
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-200">
          © 2024 Acme Inc. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function MountainIcon({ className }: { className: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}
