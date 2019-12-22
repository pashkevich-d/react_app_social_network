import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={s.profileCover}>
                <img src="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg" />
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt=""/>
                {/* <img src="https://thispersondoesnotexist.com/image" alt=""/> */}
                <p className={s.profileTitle}>{props.profile.fullName}</p>
            </div>
        </div>
    )
}

export default ProfileInfo;