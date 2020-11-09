#import get to call a get request on the site
from requests import get
import re
#get the first page of the east bay housing prices
response = get('https://chico.craigslist.org/search/pet?query=lost') #get rid of those lame-o's that post a housing option without a pic using their filter

from bs4 import BeautifulSoup
html_soup = BeautifulSoup(response.text, 'html.parser')
image_url = 'https://images.craigslist.org/{}_300x300.jpg'

#get the macro-container for the missing pets posts
posts = html_soup.find_all('li', class_= 'result-row')
print(type(posts)) #to double check that I got a ResultSet
print(len(posts)) #to double check I got 120 (elements/page)

post_one = posts[2]
print(post_one)
test = post_one.find('span', class_= 'result-hood')
print(test.text)

post_one_last_seen = post_one.find("time",attrs={"class":"result-date"})["title"]
#post_one_price.strip()
print(post_one_last_seen)

ids = [item['data-ids'].replace('3:','') for item in post_one.select('.result-image[data-ids]')] 
images = [image_url.format(j) for i in ids for j in i.split(',')]
print(images)

