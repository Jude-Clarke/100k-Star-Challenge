
import 'applications.OfflineApplication';


namespace `applications` (
    class Test25 extends OfflineApplication {
        constructor(element){
            super(element);
        }

        async onConnected() {
            await super.onConnected();
        }
    }
);