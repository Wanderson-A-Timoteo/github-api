import React, { useState } from 'react'
import * as S from './styled'
import useGithub from '../../hooks/github-hooks'

const Header = () => {
    const { getUser } = useGithub()

    const [usernameForSearch, setUsernameForSearch] = useState()

    const submitGetUser = () => {
        if (!setUsernameForSearch) return
        return getUser(usernameForSearch)
    }
    return (
        <S.Wrapper>
            <input
                type="text"
                placeholder="Digite o nome de usuário para pesquisar..."
                onChange={submitGetUser}
            />
            <button type="submit">
                <span>Buscar</span>
            </button>
        </S.Wrapper>
    )
}

export default Header
