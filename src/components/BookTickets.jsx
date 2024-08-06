import { useDispatch, useSelector } from "react-redux"
import {
  toggleSeatSelection,
  cancelSeat,
} from "../redux/slices/bookTicketsSlice"

const BookTickets = () => {
  const dispatch = useDispatch()
  const { seatList, selectedSeats } = useSelector(
    (state) => state.bookTicketsSlice
  )

  // Tính tổng giá tiền của các ghế đã chọn
  const total = selectedSeats.reduce((sum, seat) => sum + seat.gia, 0)

  return (
    <div className="container mx-auto my-6">
      <h1 className="text-yellow-500  text-6xl text-center my-6">
         Avengers: Infinity War
      </h1>

      <div className="flex justify-around">
        <div className="my-2">
          <div className=" bg-white px-96 py-5 rounded-md" style={{ clipPath: 'polygon(10% 0, 90% 0, 100% 55%, 0 55%)' }}> </div>


          <div className="flex justify-center items-center">
            <div className="w-10 h-10 m-2"></div>{" "}
            {/* Placeholder for row letters */}
            {Array.from({ length: 12 }, (_, i) => (
              <div
                key={i}
                className="w-10 h-10 m-2 flex justify-center items-center text-white"
              >
                {i + 1}
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-center items-center">
            {seatList.map((row, rowIndex) => (
              <div key={rowIndex} className="flex">

                <div className="w-10 h-10 m-2 flex justify-center items-center text-white">
                  {row.hang}
                </div>

                {row.danhSachGhe.map((seat) => (
                  <button
                    key={seat.soGhe}
                    onClick={() =>
                      dispatch(
                        toggleSeatSelection({
                          soGhe: seat.soGhe,
                          hang: row.hang,
                        })
                      )
                    }
                    className={`w-10 h-10 m-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
                      seat.isSelected
                        ? "bg-green-400"
                        : seat.daDat
                        ? "bg-orange-400"
                        : "bg-white border-yellow-500 border-2 text-black hover:bg-yellow-200"
                    }`}
                  >
                    {seat.soGhe}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>


        <div>
          <h3 className="text-white text-3xl  text-center mb-4">
            Chọn Ghế
          </h3>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <div className="bg-orange-400 p-4 rounded-md"></div>
              <p className="text-white text-xl">Ghế đã đặt</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="bg-green-400 p-4 rounded-md"></div>
              <p className="text-white text-xl">Ghế đã chọn</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="bg-gray-400 p-4 rounded-md"></div>
              <p className="text-white text-xl">Ghế chưa đặt</p>
            </div>
          </div>

          <div className="overflow-x-auto overflow-y-auto max-h-96 relative shadow-md sm:rounded-lg my-4">
            <table className="w-full text-sm text-left text-white border border-white"> 
              <thead className="text-sm text-white uppercase border border-white ">
                <tr>
                  <th scope="col" className="py-3 px-6">
                    Ghế
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Giá
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Đóng
                  </th>
                </tr>
              </thead>
              <tbody>
                {selectedSeats.map((seat) => (
                  <tr className=" border-b" key={seat.soGhe}>
                    <th
                      scope="row"
                      className="py-4 px-6  text-green-800 whitespace-nowrap"
                    >
                      {seat.soGhe}
                    </th>
                    <td className="py-4 px-6">{seat.gia}</td>
                    <td className="py-4 px-6">
                    <button
                        type="button"
                        onClick={() => dispatch(cancelSeat({ soGhe: seat.soGhe }))}
                        className="focus:outline-none text-white bg-red-500 hover:bg-red-900 focus:ring-4 focus:ring-red-300 rounded-lg text-sm px-5 py-1.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                      >
                        <i class="fa-solid fa-ban"></i>
                      </button>
                    </td>
                  </tr>
                ))}

                <tr className="">
                  <th
                    scope="row"
                    className="py-4 px-6  text-white whitespace-nowrap"
                  >
                    Tổng Tiền
                  </th>
                  <td className="py-4 px-6 ">{total}</td>
                  <td className="py-4 px-6"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookTickets
