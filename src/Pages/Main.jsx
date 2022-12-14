import Header from "../Components/Header"
import RatingComponent from "../Components/RatingComponent"
import Ratinglist from "../Components/Ratinglist"
export default function Main() {


    return (
        <>
            <Header />
            <main className="max-w-[750px] m-auto p-[2rem]">
                <RatingComponent />
                <Ratinglist />
            </main>
        </>
    )
}
