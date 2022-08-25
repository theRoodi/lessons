type StreetTypes = {
    title: string
}

type AddressTypes = {
    street: StreetTypes
}

export type ManType = {
    id: number
    name: string
    age: number
    lessons: Array<{title:string}>
    address: AddressTypes
}

export const Man:React.FC<ManType> = ({id, name, ...props}) => {
    return(
        <div>
            <div>{name}</div>
            <div>{props.address.street.title}</div>
        </div>
    )
}