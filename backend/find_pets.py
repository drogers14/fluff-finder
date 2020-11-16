# def python_scrape():
# import get to call a get request on the site
from bs4 import BeautifulSoup
from requests import get
import re
import json
import sys

city_name = sys.argv[1]
city_name = city_name.replace(' ', '')
city_name = city_name.lower()

# get the first page of the lost pets
response = get(
    'https://%s.craigslist.org/search/pet?query=lost' % (city_name))

html_soup = BeautifulSoup(response.text, 'html.parser')
image_url = 'https://images.craigslist.org/{}_300x300.jpg'

# get the macro-container for the missing pets posts
posts = html_soup.find_all('li', class_='result-row')
 # print(type(posts)) #to double check that I got a ResultSet
 # print(len(posts)) #to double check I got 120 (elements/page)

data_arr = []
posts_lim = len(posts) / 2
   # grabs a post
for i in range(3):
        post_one = posts[i]
        # print(post_one)

        # get location last seen
        location = post_one.find('span', class_='result-hood')
        if location is None:
            location = 'none'
        else:
            location = location.text
            location = location.replace('(', '')
            location = location.replace(')', '')
        # locations.append(location)
        # print(location)

        # get date last seen
        post_one_last_seen = post_one.find(
            "time", attrs={"class": "result-date"})["title"]
        # post_one_last_seen_arr.append(post_one_last_seen)
        # print(post_one_last_seen)

        # gets images of postings
        ids = [item['data-ids'].replace('3:', '')
               for item in post_one.select('.result-image[data-ids]')]
        images = [image_url.format(j) for i in ids for j in i.split(',')]

        if len(images) is 0:
            images.append('')

        # images_arr.append(images[0])
        # print(images)

        # get og_post links
        #lass = "result-image gallery" if "result-image gallery" else "result-image gallery empty"
        og_post = post_one.find('a', attrs={"class": "result-image gallery"})
        #tempog_post = og_post_test
        if og_post is None:
            og_post_test = post_one.find(
                'a', attrs={"class": "result-image gallery empty"})['href']
        else:
            og_post_test = og_post['href']

        # og_posts_arr.append(og_post_test)
        # print(og_post_test)

        # get rid of those lame-o's that post a housing option without a pic using their filter
        response_for_post = get(og_post_test)
        html_soup2 = BeautifulSoup(response_for_post.text, 'html.parser')
        # print(html_soup2)

        # get bio for pet
        hmmm = html_soup2.find('section', id="postingbody")
        hmmm = hmmm.text

        # remove QR Code Link to This Post
        hmmm = hmmm.replace('QR Code Link to This Post', '')
        # bio_arr.append(hmmm)
        # print(hmmm.text)

        data = {
            "name": "",
            "breed": "",
            "comments": hmmm,
            "date": post_one_last_seen,
            "location": location,
            "size": 0,
            "species": "",
            "og_post": og_post_test,
            "image": images[0]
        }
        #python2json = json.dumps(data)
        #print(python2json)
        data_arr.append(data)

    #print(python2json)
print(json.dumps(data_arr))
sys.exit(0)
    # return data_arr

#array = python_scrape()
# print(array)



"""#import get to call a get request on the site
from requests import get
import re
import json
import sys

city_name = sys.argv[1]
city_name = city_name.replace(' ', '')
city_name = city_name.lower()
#print('HI FROM ARGV', sys.argv[1])
#get the first page of the east bay housing prices
response = get('https://%s.craigslist.org/search/pet?query=lost' % (city_name))

from bs4 import BeautifulSoup
html_soup = BeautifulSoup(response.text, 'html.parser')
image_url = 'https://images.craigslist.org/{}_300x300.jpg'

#get the macro-container for the missing pets posts
posts = html_soup.find_all('li', class_= 'result-row')
#print(type(posts)) #to double check that I got a ResultSet
#print(len(posts)) #to double check I got 120 (elements/page)

#grabs a post
post_one = posts[0]
#print(post_one)

#get location last seen
location = post_one.find('span', class_= 'result-hood').text
location = location.replace('(', '')
location = location.replace(')', '')

#print(location)

#get date last seen
post_one_last_seen = post_one.find("time",attrs={"class":"result-date"})["title"]
#print(post_one_last_seen)

#gets images of postings
ids = [item['data-ids'].replace('3:','') for item in post_one.select('.result-image[data-ids]')] 
images = [image_url.format(j) for i in ids for j in i.split(',')]

if len(images) is 0:
    images.append('')

#print(images)

#get og_post links
#lass = "result-image gallery" if "result-image gallery" else "result-image gallery empty"
og_post = post_one.find('a', attrs={"class": "result-image gallery" })
#tempog_post = og_post_test
if og_post is None:
    og_post_test = post_one.find('a', attrs={"class": "result-image gallery empty" })['href']
else:
        og_post_test = og_post['href'];


#print(og_post_test)

response_for_post = get(og_post_test) #get rid of those lame-o's that post a housing option without a pic using their filter
html_soup2 = BeautifulSoup(response_for_post.text, 'html.parser')

#print(html_soup2)
#get bio for pet
hmmm = html_soup2.find('section', id="postingbody" )
hmmm = hmmm.text
#remove QR Code Link to This Post

hmmm = hmmm.replace('QR Code Link to This Post','')
#print(hmmm.text)

data = {
'name':'', 
'breed':'', 
'comments': hmmm, 
'date': post_one_last_seen, 
'location': location, 
'size': 0, 
'species': '',
'og_post': og_post_test,
'image': images[0],
}

python2json = json.dumps(data)
print(python2json)
#return data"""