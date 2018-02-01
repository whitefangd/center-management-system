import { Injectable } from '@angular/core';


@Injectable()
export class UserDetailService {

	private _Authentication = false;

	private _AccountID;
	private _UserName = 'User A';
	private _UserType;
	private _UserTypeName = 'User type A';
	private _UserRole;
	private _UserGroup;
	private _NoticationsCount = 30;
	private _Notications = [
		{
			Date: (new Date(Date.UTC(2018, 0, 2))).getTime(),
			Items: [
				{
					UserName: 'User B',
					AccountID: '0000000',
					AvatarSrc: 'assets/resources/logo/logo.png',
					Date: (new Date(Date.UTC(2018, 0, 2, 10, 30, 46))).getTime(),
					Message: "Hey there! This new version of SB Admin is pretty awesome! These messages clip off when they reach the end of the box so they don't overflow over to the sides!"
				}
			]
		}
	];

	private _Messages = [
		{
			UserName: 'User B',
			AccountID: '0000000',
			AvatarSrc: 'assets/resources/logo/logo.png',
			Date: (new Date(Date.UTC(2018, 0, 2, 10, 30, 46))).getTime(),
			Message: "Hey there! This new version of SB Admin is pretty awesome! These messages clip off when they reach the end of the box so they don't overflow over to the sides!"
		}
	];

	public get AccountID() {
		return this._AccountID;
	};
	public get UserName() {
		return this._UserName;
	};
	public get UserType() {
		return this._UserType;
	};
	public get UserTypeName() {
		return this._UserTypeName;
	};
	public get UserRole() {
		return this._UserRole;
	};
	public get UserGroup() {
		return this._UserGroup;
	};
	public get Authentication() {
		return this._Authentication;
	}
	public get Notications() {
		return this._Notications;
	}
	public get NoticationsCount() {
		return this._NoticationsCount;
	}
	public get Messages() {
		return this._Messages;
	}
}