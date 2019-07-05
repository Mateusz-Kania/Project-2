import DisplayDetection from './DisplayDetection'

export default function() {
    let widthMode=DisplayDetection();
    let scrollValue = (window.scrollY || document.documentElement.scrollTop);
    switch (widthMode) {
        case "medium":
            if(scrollValue>91)
                return true;
            return false;
        case "small":
            if(scrollValue>116)
                return true;
            return false;
        default:
            if(scrollValue>162)
                return true;
            return false;
    }
}