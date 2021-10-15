export type StateProps = {

}

export type DispatchProps = {
    fetchUserData: () => void
}

export interface Props extends StateProps, DispatchProps {}
