class Contact extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            firstName: "",
            lastName: "",
            PhoneNum: "",
            email: "",
            agree: false,
            contactType: 'By Phone',
            feedback: "",
            touched: {
                firstName: false,
                lastName: false,
                phoneNum: false,
                email: false
            }
        };
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }