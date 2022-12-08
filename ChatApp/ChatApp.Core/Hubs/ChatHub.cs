using System;
using Microsoft.AspNetCore.SignalR;

namespace ChatApp.Core.Hubs
{
	public class ChatHub : Hub
	{
		public async Task SendMessage(string user, string message)
		{
			await Clients.All.SendAsync("RecieveMessage", user, message);
		}
	}
}

