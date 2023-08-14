import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isButtonDisabled: boolean = true;
  isImageDisabled: boolean = true;

  title = 'nse';
  users = [
    { name: 'Motilal Oswal', code: 10293, status: 'Eligible', date: '' , penalty: 'Penalty',pamt:'1700.0', remarks:'View', last:'30/4/21',due:'30/4/21',submission: '05/04/21'},
    { name: 'Sharekhan', code: 10378, status: 'Eligible', date: '' , penalty: 'Penalty',pamt:'0.0', remarks:'View', last:'31/5/21',due:'31/5/21',submission: ''},
    { name: 'Edelweiss', code: 14582, status: 'Eligible', date: '' , penalty: 'Penalty',pamt:'500.0', remarks:'+', last:'30/4/21',due:'30/4/21',submission: '10/04/21'},
    { name: 'Nomura Capital', code: 19384, status: 'Eligible', date: '' , penalty: 'Penalty',pamt:'0.0', remarks:'View', last:'31/5/21',due:'31/5/21',submission: ''},
    { name: 'ABC', code: 10475, status: 'Eligible', date: '' , penalty: 'NA',pamt:'0.0', remarks:'+', last:'31/5/21',due:'31/5/21',submission: '04/05/21'},
    { name: 'DEF', code: 12395, status: 'Inactive', date: 'Choose Date' , penalty: 'NA',pamt:'0.0', remarks:'View', last:'31/5/21',due:'31/5/21',submission: ''},
    { name: 'Vijay Malani', code: 18472, status: 'Eligible', date: '' , penalty: 'NA',pamt:'0.0', remarks:'View', last:'30/4/21',due:'30/4/21',submission: '04/04/21'},
    { name: 'Solsberry Limited', code: 10047, status: 'Eligible', date: '' , penalty: 'NA',pamt:'0.0', remarks:'View', last:'31/5/21',due:'31/5/21',submission: ''},
  ];
  
  onClick() {
    Swal.fire("Master list has not yet been published for this submission cycle.","Next Activation:Post 1 April 2020 and publishing not worth master");
    // Add your desired functionality here
  }
  confirmBox(){
    Swal.fire("No errors found in the uploaded master")
  }
  confirm(){
    Swal.fire("Please recheck the master to ensure all relevant fields are present.","You will have to reupload.")
  }
  popupmessage(){
    Swal.fire({
      title: 'Send to Member',
      text: 'Are you sure you want to publish this matter for the submission cycle 2020? You will not be able to reverse the decision & link will become open for Eligible members to submit',
      confirmButtonText:'I AM SURE',
      cancelButtonText: 'GO BACK',
      // icon:'warning',
      showCancelButton:true
    }).then((result)=>{
      if(result.value){
        Swal.fire(
          'Published',
          'Your master has been published.',
          'success'
        );
      }else if(result.dismiss==Swal.DismissReason.cancel){
        Swal.fire('Cancelled','Your master is safe:)','error');
      }
    });
  }
}

