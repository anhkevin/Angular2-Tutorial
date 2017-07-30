import { Component } from '@angular/core';

@Component({
    selector: 'top-page',
    templateUrl: './top.component.html',
    styleUrls: ['./top.component.css']
})
export class topComponent{
    message: string = 'Test thu message';
    isBool: boolean = true;
    infor: any = {};
    tabIndex: number = 1;
    static clickCounter = 0;

    baseData = {
        id:4,
        firstname: "Nguyen",
        lastname: "A",
        email: "rongxanh102@gmail.com"
    };

    listData = [{
        id:1,
        firstname: "Nguyen",
        lastname: "A",
        email: "rongxanh102@gmail.com"
    },{
        id:2,
        firstname: "Phan",
        lastname: "B",
        email: "454354354@gmail.com"
    },{
        id:3,
        firstname: "Hong",
        lastname: "C",
        email: "rtr@gmail.com"
    }];

    // Load int
    ngOnInit(){
        this.infor.name = "Anh";
        this.infor.address = "Ha Tinh";
        this.infor.age = "25";
        this.infor.sex = "Male";
    }

    // Click for button
    doClick(){
        this.message = "Ban da click";

        // Timeout
        setTimeout(()=>{
            this.message = "Click Done";
        }, 2000);
    }

    // Tab
    changeTab(tabIndex){
        this.tabIndex = tabIndex;
    }

    // Data From server
    getDataFromServer(){
        return JSON.parse(JSON.stringify(this.listData));
    }

    // 
    getData(){
        if(topComponent.clickCounter % 2 == 0) {
            this.listData = this.getDataFromServer().concat(this.baseData);
        }
        else{
            this.listData = this.getDataFromServer().concat([]);
        }

        topComponent.clickCounter++;
    }

    // Trach By data
    dataTrackByFn(index, item){
        console.log(item.id);
        return item.id;
    }

    // Event
    messages = [];

    onClick(){

    }

    onInput(event) {
        this.messages.push(event.target.value);
    }
}