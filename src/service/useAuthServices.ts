import { UsersPermissionsLoginInput, UsersPermissionsLoginPayload, useLoginMutation } from 'src/generated/graphql'

export const useAuthServices = () => {
  const [loginMutation, { loading: loadingLogin, error: errorLogin }] = useLoginMutation()

  return {
    loadingLogin,
    errorLogin,
    Login: async (input: UsersPermissionsLoginInput) => {
      const res = await loginMutation({
        variables: { input }
      })

      const dataLogin: UsersPermissionsLoginPayload | undefined = res?.data?.login

      return {
        dataLogin
      }
    }
  }
}
