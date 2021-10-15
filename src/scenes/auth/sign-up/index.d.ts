export type StateProps = {

}

export type DispatchProps = {
    signUpUser: (email: string, password: string, firstName: string, lastName: string) => void
}

export interface Props extends StateProps, DispatchProps {}
