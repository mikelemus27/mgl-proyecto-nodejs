function Task(data)
{
	this.title=ko.observable(data.title);
	this.isDone=ko.observable(data.isDone);
}
function TaskListViewModel()
{
	var self=this;
	serlf.tasks=ko.observableArray([]);
	self.num1=ko.observable();
	self.num2=ko.observable();
	
	self.save=function()
	{
		
