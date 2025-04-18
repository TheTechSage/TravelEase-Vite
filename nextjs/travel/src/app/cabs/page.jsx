import Vahicals from "../../components/cabs-home/Vahical";
import SearchCab from "../../components/cabs-home/SearchCab";
import ChooseUs from "../../components/cabs-home/Choose";
import Download from "../../components/cabs-home/DownloadOurApp";

export default function CabHome(){
    return(
        <div className="">
            <SearchCab />
            <Vahicals />
            <ChooseUs />
            <Download />
        </div>
    )
}