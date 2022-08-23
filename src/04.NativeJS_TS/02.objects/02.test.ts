type StreetType = {
    title: string
}

type AddressType = {
    number: number
    street: StreetType
}

type HouseType = {
    buildedAt: number
    reparied: boolean
    address: AddressType
}

type GovernmentBuildingsType = {
    type: string
    budget: number
    staffCount: number
    address: AddressType
}

type CityTypes = {
    title: string
    houses: Array<HouseType>
    governmentBuildings: Array<GovernmentBuildingsType>
    citizensNumber: number
}
let city: CityTypes



beforeEach(() => {
    city = {
        title: 'New York',
        houses: [{buildedAt: 2012, reparied: false, address: {street: {title: 'street'}, number: 9}},
            {buildedAt: 2013, reparied: false, address: {street: {title: 'street2'}, number: 19}},
            {buildedAt: 2014, reparied: true, address: {street: {title: 'street3'}, number: 29}}],
        governmentBuildings: [{type: 'Hospital', budget: 20000000, staffCount: 100, address: {street: {title: 'street'}, number: 89}}],
        citizensNumber: 100000
    }
})

test('city should contains 3 houses', () => {
    expect(city.houses.length).toBe(3)

    expect(city.houses[0].buildedAt).toBe(2012)
    expect(city.houses[0].reparied).toBe(false)
    expect(city.houses[0].address.number).toBe(9)
    expect(city.houses[0].address.street.title).toBe('street')
})

test('city should contains hospital and firestation', ()=> {
    expect(city.governmentBuildings.length).toBe(1)
    expect(city.governmentBuildings[0].type).toBe("Hospital")
    expect(city.governmentBuildings[0].budget).toBe(20000000)
    expect(city.governmentBuildings[0].staffCount).toBe(100)
    expect(city.governmentBuildings[0].address.street.title).toBe("street")
})