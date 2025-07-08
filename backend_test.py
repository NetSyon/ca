#!/usr/bin/env python3
import requests
import json
import os
import sys
from datetime import datetime

# Get the backend URL from the frontend .env file
def get_backend_url():
    with open('/app/frontend/.env', 'r') as f:
        for line in f:
            if line.startswith('REACT_APP_BACKEND_URL='):
                return line.strip().split('=')[1].strip('"\'')
    return None

def test_root_endpoint(base_url):
    """Test the root endpoint"""
    url = f"{base_url}/api/"
    print(f"\n🔍 Testing GET {url}")
    
    try:
        response = requests.get(url)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        
        if response.status_code == 200 and response.json().get('message') == 'Hello World':
            print("✅ Root endpoint test passed!")
            return True
        else:
            print("❌ Root endpoint test failed!")
            return False
    except Exception as e:
        print(f"❌ Error testing root endpoint: {str(e)}")
        return False

def test_create_status_check(base_url):
    """Test creating a status check"""
    url = f"{base_url}/api/status"
    print(f"\n🔍 Testing POST {url}")
    
    data = {
        "client_name": f"Test Client {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}"
    }
    
    try:
        response = requests.post(url, json=data)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        
        if response.status_code == 200 and response.json().get('client_name') == data['client_name']:
            print("✅ Create status check test passed!")
            return True
        else:
            print("❌ Create status check test failed!")
            return False
    except Exception as e:
        print(f"❌ Error testing create status check: {str(e)}")
        return False

def test_get_status_checks(base_url):
    """Test getting all status checks"""
    url = f"{base_url}/api/status"
    print(f"\n🔍 Testing GET {url}")
    
    try:
        response = requests.get(url)
        print(f"Status Code: {response.status_code}")
        print(f"Found {len(response.json())} status checks")
        
        if response.status_code == 200 and isinstance(response.json(), list):
            print("✅ Get status checks test passed!")
            return True
        else:
            print("❌ Get status checks test failed!")
            return False
    except Exception as e:
        print(f"❌ Error testing get status checks: {str(e)}")
        return False

def run_all_tests():
    """Run all backend API tests"""
    print("=" * 50)
    print("🧪 STARTING BACKEND API TESTS")
    print("=" * 50)
    
    backend_url = get_backend_url()
    if not backend_url:
        print("❌ Could not find REACT_APP_BACKEND_URL in frontend/.env")
        return False
    
    print(f"🌐 Using backend URL: {backend_url}")
    
    # Run all tests
    root_test = test_root_endpoint(backend_url)
    create_test = test_create_status_check(backend_url)
    get_test = test_get_status_checks(backend_url)
    
    # Summary
    print("\n" + "=" * 50)
    print("📊 TEST RESULTS SUMMARY")
    print("=" * 50)
    print(f"Root Endpoint: {'✅ PASSED' if root_test else '❌ FAILED'}")
    print(f"Create Status Check: {'✅ PASSED' if create_test else '❌ FAILED'}")
    print(f"Get Status Checks: {'✅ PASSED' if get_test else '❌ FAILED'}")
    
    all_passed = all([root_test, create_test, get_test])
    print("\n" + "=" * 50)
    if all_passed:
        print("🎉 ALL TESTS PASSED! Backend API is working correctly.")
    else:
        print("❌ SOME TESTS FAILED! Backend API has issues.")
    print("=" * 50)
    
    return all_passed

if __name__ == "__main__":
    success = run_all_tests()
    sys.exit(0 if success else 1)