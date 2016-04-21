from selenium import webdriver as wd;
import sys, os;

#
# Press CTRL+C to stop the script
#

page_limit = 5;
username = 'aaa@bbb.com';		##########-------MAIL ID----------
password = 'cccdddeeee';		##########-------PASSWORD---------

firefox = wd.Firefox ();
firefox.get ('https://linkedin.com/');

firefox.find_element_by_id ('login-email').send_keys (username);
firefox.find_element_by_id ('login-password').send_keys (password);
firefox.find_element_by_name ('submit').click ();

print ('Now, navigate to the search results page and ONLY THEN proceed')
proceed = input ('Press enter to proceed, or type A & press enter to abort: ');
if (proceed):
	print ('Aborting..');
	os._exit (1);


while (True):
	currentPage = firefox.current_url;
	connect_buttons = firefox.find_elements_by_link_text ('Connect');
	counter = 0;
	cb_length = len (connect_buttons);

	while (counter < cb_length):
		connect_buttons [counter].click ();
		if (not currentPage == firefox.current_url):
			firefox.back ();
			connectButtons = firefox.find_elements_by_link_text ('Connect');
	
		counter += 1;

	try:
		next_button = firefox.find_element_by_link_text ('Next >');
		next_button.click ();
	except Exception as e:
		#print (e);
		pass;
