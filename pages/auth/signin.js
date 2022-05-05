import { async } from "@firebase/util"
import { getProviders, signIn as SignIntoProvider } from "next-auth/react"
import React from "react"

// browser
const signin = ({ providers }) => {
  return (
    <>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => SignIntoProvider(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
  )
}

// middle server ( Server Side Render SSR)
export async function getServerSideProps() {
  const providers = await getProviders()

  return {
    props: {
      providers,
    },
  }
}

export default signin
