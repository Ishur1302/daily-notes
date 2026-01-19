import socket

def get_ip(domain):
    try:
        ip = socket.gethostbyname(domain)
        print(f"The IP address of {domain} is {ip}")
    except socket.gaierror:
        print("Invalid domain or network issue.")

if __name__ == "__main__":
    # Testing with your deployed project
    get_ip("safe-share-snap.vercel.app")
