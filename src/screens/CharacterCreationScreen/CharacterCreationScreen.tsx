import React, { PureComponent, ReactNode } from 'react'
import {Text, View} from 'react-native'
import { CharacterCreationStackContainer } from '../../utils/navigationRoutes'

interface Props {}
interface State {}

class CharacterCreationScreen extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            
        }
    }

    render(): ReactNode {
        return <CharacterCreationStackContainer />
    }
}

export default CharacterCreationScreen
