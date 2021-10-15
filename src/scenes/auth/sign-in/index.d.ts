export type StateProps = {

}

export type DispatchProps = {
    signInUser: (email: string, password: string) => void
}

export interface Props extends StateProps, DispatchProps {}
