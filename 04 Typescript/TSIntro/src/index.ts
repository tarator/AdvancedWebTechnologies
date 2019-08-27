import { LoadingDemos } from './loading';
import { ClassesDemos } from './classes';
import { FunctionDemos } from './functions';
import { GenericsDemos } from './generics';
import { InterfacesDemos } from './interfaces';
import { ObjectDemos } from './objects';
import { TypesDemos } from './types';
import { ServicesDemos } from './services';
import { ModulesDemos } from './modules';

import * as $ from 'jquery';
import { RxJSDemos } from './rxjs';

//Code based Binding

document.addEventListener('DOMContentLoaded', () => {
	let btn = document.querySelector('#lnkBind');
	btn.addEventListener('click', (e: Event) => loadContent('loading.html'));
});

//export method to global namespace - otherwise is is not available for function call

(<any>window).loadIt = loadContent;

export function loadContent(page) {
	$.ajax({
		type: 'GET',
		url: page,
		contentType: 'application/json; charset=utf-8',
		dataType: 'text',
		success: function(data) {
			if (data != null) {
				$('#workbench').empty();
				$('#workbench').html(data);
			}
		},
		error: function(msg) {
			console.log(msg.responseText);
		}
	});
}

//Exposing Class to GlobalNamespace
export class Loader {
	load(page) {
		$.ajax({
			type: 'GET',
			url: page,
			contentType: 'application/json; charset=utf-8',
			dataType: 'text',
			success: function(data) {
				if (data != null) {
					$('#workbench').empty();
					$('#workbench').html(data);
				}
			},
			error: function(msg) {
				console.log(msg.responseText);
			}
		});
	}
}

//exporting an object
(<any>window).loader = new Loader();

(<any>window).loadingDemos = new LoadingDemos();

//Using export from webpack.config.js

class Demos {
	types = new TypesDemos();
	classes = new ClassesDemos();
	functions = new FunctionDemos();
	interfaces = new InterfacesDemos();
	generics = new GenericsDemos();
	objects = new ObjectDemos();
	services = new ServicesDemos();
	modules = new ModulesDemos();
	rxjs = new RxJSDemos();
}

export var demo = new Demos();
