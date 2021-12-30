import React from 'react'
import * as S from './styled'
import RepositoryItem from '../repository-item'

const Repositories = () => {
    return (
        <S.WrapperTabs
            selectedTabClassName="is-selected"
            selectedTabPanelClassName="is-selected"
        >
            <S.WrapperTabList>
                <S.WrapperTab>Repositories</S.WrapperTab>
                <S.WrapperTab>Starred</S.WrapperTab>
            </S.WrapperTabList>
            <S.WrapperTabPanel>
                <RepositoryItem
                    name="API-DevsNotes"
                    linkToRepo="https://github.com/Wanderson-A-Timoteo/API-DevsNotes"
                    fullName="Wanderson-A-Timoteo/API-DevsNotes"
                />
            </S.WrapperTabPanel>
            <S.WrapperTabPanel>
                <RepositoryItem
                    name="api-nodejs-mongodb"
                    linkToRepo="https://github.com/Wanderson-A-Timoteo/api-nodejs-mongodb"
                    fullName="Wanderson-A-Timoteo/Wanderson-A-Timoteo/api-nodejs-mongodb"
                />
            </S.WrapperTabPanel>
        </S.WrapperTabs>
    )
}

export default Repositories
