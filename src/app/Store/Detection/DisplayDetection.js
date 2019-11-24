//import {isMobile} from 'react-device-detect';

let isMobile=false;

class DisplayDetection{
    constructor() {
        this.scrolledMenu=false;
        this.currentScrollMenuBreakpoint=1000;

        this.displayBreakpointsDataMobile = [
            {
                name: "small",
                minWidth: '0px',
                maxWidth: '639px',
                scrolledMenuBreakpoint: 116
            },
            {
                name: "medium",
                minWidth: '640px',
                maxWidth: '959px',
                scrolledMenuBreakpoint: 91
            },
            {
                name: "tablet",
                minWidth: '960px',
                scrolledMenuBreakpoint: 162
            },
        ];
        this.displayBreakpointsDataDesktop = [
            {
                name: "small",
                minWidth: '0px',
                maxWidth: '639px',
                scrolledMenuBreakpoint: 116
            },
            {
                name: "medium",
                minWidth: '640px',
                maxWidth: '959px',
                scrolledMenuBreakpoint: 91
            },
            {
                name: "tablet",
                minWidth: '960px',
                maxWidth: '1199px',
                scrolledMenuBreakpoint: 162
            },
            {
                name: "desktop",
                minWidth: '1200px',
                scrolledMenuBreakpoint: 162
            },

        ];
        this.displayBreakpointsDataMobile.map(DisplayDetection.createQueriesForBreakpoint);
        this.displayBreakpointsDataDesktop.map(DisplayDetection.createQueriesForBreakpoint);
        this.setBreakpointListeners=this.setBreakpointListeners.bind(this);
        this.getCurrentStatus=this.getCurrentStatus.bind(this);
        this.setScrollListener=this.setScrollListener.bind(this);
    }

    setStore(store){
        this.store=store;
    }

    static createQueriesForBreakpoint(breakpoint){

        if(breakpoint.maxWidth){
            breakpoint.query = `(min-width:${breakpoint.minWidth}) and (max-width:${breakpoint.maxWidth})`;
        }
        else {
            breakpoint.query = `(min-width:${breakpoint.minWidth})`;
        }
    }

    setBreakpointListeners(breakpoint){
        let mqDisplaySize=window.matchMedia(breakpoint.query);

        mqDisplaySize.addListener((e)=>{
            if(e.matches){
               this.dispatchDisplaySize(breakpoint.name);
               this.currentScrollMenuBreakpoint=breakpoint.scrolledMenuBreakpoint;
               this.dispatchScrolledMenu(this.isScrolledMenuEnabled());
            }
        });


    }

    setListeners(){
        if(isMobile){
            this.displayBreakpointsDataMobile.map(this.setBreakpointListeners);
        }
        else{
            this.displayBreakpointsDataDesktop.map(this.setBreakpointListeners);
        }

        window.addEventListener('scroll', this.setScrollListener);
    }

    setScrollListener(){
        let newScrolledMenuStatus = this.isScrolledMenuEnabled();
        if(!(newScrolledMenuStatus===this.scrolledMenu))
        {
            this.dispatchScrolledMenu(newScrolledMenuStatus);
            this.scrolledMenu=newScrolledMenuStatus;
        }


    }

    dispatchDisplaySize(size){
        this.store.dispatch(
            {
                type: "DISPLAY_CHANGE",
                payload: {
                    value: size
                }
            }
        );
    }

    dispatchScrolledMenu(enabled){
        this.store.dispatch(
            {
                type:"SCROLL_CHANGE",
                payload:{
                    value:enabled
                }
            }
        );
    }

    isScrolledMenuEnabled(){
        let scrollValue = (window.scrollY || document.documentElement.scrollTop);
        if(scrollValue>this.currentScrollMenuBreakpoint)
        {
            return true;
        }
        return false;
    }


    getCurrentStatus(){
        let currentDisplaySize='';
        let self = this;

        function checkIfItsCurrent(breakpoint){
            let mq=window.matchMedia(breakpoint.query);

            if(mq.matches){
                currentDisplaySize=breakpoint.name;
                self.currentScrollMenuBreakpoint=breakpoint.scrolledMenuBreakpoint;
                self.currentScrolledMenu=self.isScrolledMenuEnabled();
            }
        }

        if(isMobile){
            this.displayBreakpointsDataMobile.map(checkIfItsCurrent);
        }
        else{
            this.displayBreakpointsDataDesktop.map(checkIfItsCurrent);
        }



        return {
            displaySize:currentDisplaySize,
        }
    }


}




export default DisplayDetection;

