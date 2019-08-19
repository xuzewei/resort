import React from 'react'
import { withRoomConsumer } from '../context'
import Loading from './Loading'
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList'

function RoomsContainer({ context }) {
  const { loading, SortedRooms, rooms } = context;
  if (loading) {
    return <Loading />
  }

  return (
    <>
      <RoomsFilter rooms={rooms} />
      {/* <RoomsList rooms={SortedRooms} />   */}
    </>
  )
}

export default withRoomConsumer(RoomsContainer) 
