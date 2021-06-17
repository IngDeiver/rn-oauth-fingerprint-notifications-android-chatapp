import React, { useCallback } from 'react'
import HomeTemplate from './home.template'

const HomeContainer = () => {
    const [users, setuUers] = React.useState([
        { id:1, name: 'Yo'}, {id:2, name: 'otro'},
    ]);
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true)
        setTimeout(() => {
            setRefreshing(false)
        }, 1000);
    })

    return <HomeTemplate users={users} refreshing={refreshing} onRefresh={onRefresh}/>
}

export default  HomeContainer