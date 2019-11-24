import React from 'react'
import {connect} from "react-redux";
import PageLayout from "../Components/Layout/PageLayout";
import LPMenu from "../Components/LPMenu";
import LPCarouser from "../Components/LPCarousel";
import LPTiles from "../Components/LPTiles";
import AffixMenu from "../Components/AffixMenu";
import StandardPageContainer from "../Components/Layout/StandardPageContainer";
import Breadcrumb from "../Components/Breadcrumb";
import UserBlock from "../Components/UserBlock";

function UserPage(props){


    return(
        <PageLayout>
            <AffixMenu />
            <StandardPageContainer>
                <Breadcrumb />
                <UserBlock />
            </StandardPageContainer>
        </PageLayout>
    )
}



export default UserPage;