import { Injectable } from '@angular/core';
import { DataService } from '../../services/data/data.service';
import { environment } from '../../../environments/environment';

@Injectable({
	providedIn: 'root'
})
export class AuthserviceService {

	private _currentUser: string;

	constructor(private dataService: DataService) { }

	private _token: string;


	public set currentUser(value) {
		this._currentUser = value;
	}
	public get currentUser() {
		return this._currentUser;
	}

	public authenticate(uid: string, passwd: string, callback) {
		this.dataService.sendPostRequest(environment.loginurl, {
			uid: uid,
			passwd: passwd
		}, (data, error) => {
			if(error == null) {
				this._currentUser = uid;
				console.log('Token = ' + data.token);
				localStorage.setItem('access_token', data);
			}
			callback(data, error);
		});
	}
}
