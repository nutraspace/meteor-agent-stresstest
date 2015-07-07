FROM    centos:centos7

# Yum Packages needed
RUN     yum update -y && yum install -y \
	tar\
	wget\
	bzip2\
	bzip2-devel\
	bzip2-libs\
	libXext\
	libXrender\
	fontconfig\
	libfontconfig.so.1\
	unzip
# phantomjs

RUN     cd /opt; wget https://bitbucket.org/ariya/phantomjs/downloads/phantomjs-1.9.7-linux-x86_64.tar.bz2 && tar xjvf phantomjs-1.9.7-linux-x86_64.tar.bz2
RUN     ln -s /opt/phantomjs-1.9.7-linux-x86_64 /opt/phantomjs && ln -s /opt/phantomjs/bin/phantomjs /usr/local/bin
 
#casperjs

RUN     cd /opt; wget https://codeload.github.com/n1k0/casperjs/legacy.zip/1.1-beta3 && unzip 1.1-beta3
RUN     ln -s /opt/n1k0-casperjs-4f105a9/ /opt/casperjs && ln -s /opt/casperjs/bin/casperjs /usr/local/bin/

ADD . /usr/local/bin/parties
