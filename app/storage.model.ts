export class Storage {
    constructor(
        
        //Unique id assigned to each address
        public uid : string,
        public addressId : string,
        public country : string,
        public name : string,
        public phone : string,
        public PIN : string,
        public flat : string,
        public area : string,
        public landmark : string,
        public town : string,
        public state : string
    ) {}
}