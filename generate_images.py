#!/usr/bin/env python3
"""
Generate placeholder images for Memo's Inn website in required dimensions
"""

from PIL import Image, ImageDraw, ImageFont
import os
from pathlib import Path

# Define all image requirements
IMAGES_TO_CREATE = {
    # Room/Product Images - 600x400 (3-column grid layout)
    'public/images/product/1.jpg': {
        'size': (600, 400),
        'title': 'Deluxe Queen',
        'subtitle': 'Room 102',
        'color': '#2E86AB'
    },
    'public/images/product/2.jpg': {
        'size': (600, 400),
        'title': 'Economy Double',
        'subtitle': 'Room 105',
        'color': '#A23B72'
    },
    'public/images/product/3.jpg': {
        'size': (600, 400),
        'title': 'Male/Female Dorm',
        'subtitle': 'Room 101',
        'color': '#F18F01'
    },
    'public/images/product/4.jpg': {
        'size': (600, 400),
        'title': 'Male Dormitory',
        'subtitle': 'Room 103',
        'color': '#C73E1D'
    },
    'public/images/product/5.jpg': {
        'size': (600, 400),
        'title': 'Female Dormitory',
        'subtitle': 'Room 104',
        'color': '#6A994E'
    },
    'public/images/product/6.jpg': {
        'size': (600, 400),
        'title': 'Deluxe with Balcony',
        'subtitle': 'Room 106',
        'color': '#2E86AB'
    },
    
    # Blog Images - 600x400
    'public/images/blog/img-1.jpg': {
        'size': (600, 400),
        'title': 'Hiriketiya Beach',
        'subtitle': 'Travel Guide',
        'color': '#FF6B6B'
    },
    'public/images/blog/img-2.jpg': {
        'size': (600, 400),
        'title': 'Dickwella Coast',
        'subtitle': 'Adventure',
        'color': '#4ECDC4'
    },
    'public/images/blog/img-3.jpg': {
        'size': (600, 400),
        'title': "Memo's Inn",
        'subtitle': 'Budget Stay',
        'color': '#45B7D1'
    },
    'public/images/blog/img-4.jpg': {
        'size': (800, 500),
        'title': 'Hiriketiya Beach',
        'subtitle': 'Full Article',
        'color': '#FF6B6B'
    },
    'public/images/blog/img-5.jpg': {
        'size': (800, 500),
        'title': 'Dickwella Coast',
        'subtitle': 'Full Article',
        'color': '#4ECDC4'
    },
    'public/images/blog/img-6.jpg': {
        'size': (800, 500),
        'title': "Memo's Inn",
        'subtitle': 'Full Article',
        'color': '#45B7D1'
    },
    'public/images/blog/about-widget.jpg': {
        'size': (400, 300),
        'title': 'About',
        'subtitle': 'Widget',
        'color': '#95E1D3'
    },
    
    # Destination Images - Grid 600x400, Single 800x500
    'public/images/destination/1.jpg': {
        'size': (600, 400),
        'title': 'Hiriketiya',
        'subtitle': 'Surf Bay',
        'color': '#FF9FF3'
    },
    'public/images/destination/2.jpg': {
        'size': (600, 400),
        'title': 'Dickwella',
        'subtitle': 'Coast',
        'color': '#54A0FF'
    },
    'public/images/destination/3.jpg': {
        'size': (600, 400),
        'title': 'Hummanaya',
        'subtitle': 'Blow Hole',
        'color': '#48DBFB'
    },
    'public/images/destination/6.jpg': {
        'size': (600, 400),
        'title': 'Weherahena',
        'subtitle': 'Temple',
        'color': '#FFD93D'
    },
    'public/images/destination/7.jpg': {
        'size': (600, 400),
        'title': 'Blue Beach',
        'subtitle': 'Island',
        'color': '#1DD1A1'
    },
    'public/images/destination/8.jpg': {
        'size': (600, 400),
        'title': 'Dondra',
        'subtitle': 'Lighthouse',
        'color': '#EE5A6F'
    },
    'public/images/destination-single/img-1.jpg': {
        'size': (900, 600),
        'title': 'Hiriketiya Surf Bay',
        'subtitle': 'Explore',
        'color': '#FF9FF3'
    },
    'public/images/destination-single/img-2.jpg': {
        'size': (900, 600),
        'title': 'Dickwella Coast',
        'subtitle': 'Explore',
        'color': '#54A0FF'
    },
    'public/images/destination-single/img-3.jpg': {
        'size': (900, 600),
        'title': 'Hummanaya Blow Hole',
        'subtitle': 'Explore',
        'color': '#48DBFB'
    },
    'public/images/destination-single/img-4.jpg': {
        'size': (900, 600),
        'title': 'Weherahena Temple',
        'subtitle': 'Explore',
        'color': '#FFD93D'
    },
    'public/images/destination-single/img-5.jpg': {
        'size': (900, 600),
        'title': 'Blue Beach Island',
        'subtitle': 'Explore',
        'color': '#1DD1A1'
    },
    'public/images/destination-single/img-6.jpg': {
        'size': (900, 600),
        'title': 'Dondra Head Lighthouse',
        'subtitle': 'Explore',
        'color': '#EE5A6F'
    },
    
    # Service Images - Grid 600x400, Single 800x600
    'public/images/service/img-1.jpg': {
        'size': (600, 400),
        'title': 'Airport Pickup',
        'subtitle': 'Service',
        'color': '#667BC6'
    },
    'public/images/service/img-2.jpg': {
        'size': (600, 400),
        'title': 'Parking Space',
        'subtitle': 'Service',
        'color': '#DA7297'
    },
    'public/images/service/img-3.jpg': {
        'size': (600, 400),
        'title': 'Surf Location',
        'subtitle': 'Service',
        'color': '#5DADE2'
    },
    'public/images/service/img-4.jpg': {
        'size': (600, 400),
        'title': 'Hot & Cold Water',
        'subtitle': 'Service',
        'color': '#F8B88B'
    },
    'public/images/service/img-5.jpg': {
        'size': (600, 400),
        'title': 'Air Conditioning',
        'subtitle': 'Service',
        'color': '#82E0AA'
    },
    'public/images/service/img-6.jpg': {
        'size': (600, 400),
        'title': 'Free Wi-Fi',
        'subtitle': 'Service',
        'color': '#85C1E2'
    },
    'public/images/service/img-7.jpg': {
        'size': (600, 400),
        'title': 'Tea & Coffee',
        'subtitle': 'Service',
        'color': '#D7BDE2'
    },
    'public/images/service-single/1.jpg': {
        'size': (900, 600),
        'title': 'Airport Pickup & Drop',
        'subtitle': 'Complete Details',
        'color': '#667BC6'
    },
    'public/images/service-single/2.jpg': {
        'size': (900, 600),
        'title': 'Parking Space',
        'subtitle': 'Complete Details',
        'color': '#DA7297'
    },
    'public/images/service-single/3.jpg': {
        'size': (900, 600),
        'title': 'Prime Surf Location',
        'subtitle': 'Complete Details',
        'color': '#5DADE2'
    },
    'public/images/service-single/4.jpg': {
        'size': (900, 600),
        'title': 'Hot & Cold Water',
        'subtitle': 'Complete Details',
        'color': '#F8B88B'
    },
    'public/images/service-single/5.jpg': {
        'size': (900, 600),
        'title': 'Air Conditioning',
        'subtitle': 'Complete Details',
        'color': '#82E0AA'
    },
    'public/images/service-single/6.jpg': {
        'size': (900, 600),
        'title': 'Free Wi-Fi',
        'subtitle': 'Complete Details',
        'color': '#85C1E2'
    },
    'public/images/service-single/7.jpg': {
        'size': (900, 600),
        'title': 'Tea & Coffee Maker',
        'subtitle': 'Complete Details',
        'color': '#D7BDE2'
    },
    
    # Team Images - 400x400 (square)
    'public/images/team/img-1.jpg': {
        'size': (400, 400),
        'title': "Maria D'Soza",
        'subtitle': 'Planner',
        'color': '#E74C3C'
    },
    'public/images/team/img-2.jpg': {
        'size': (400, 400),
        'title': 'John Abraham',
        'subtitle': 'Makeup Artist',
        'color': '#3498DB'
    },
    'public/images/team/img-3.jpg': {
        'size': (400, 400),
        'title': 'Elizabeth Anny',
        'subtitle': 'Planner',
        'color': '#2ECC71'
    },
    'public/images/team/img-4.jpg': {
        'size': (400, 400),
        'title': 'Robert Willy',
        'subtitle': 'Photographer',
        'color': '#F39C12'
    },
    
    # Testimonial Images - 400x400 (square)
    'public/images/testimonial/img-1.jpg': {
        'size': (400, 400),
        'title': 'Sarah Mitchell',
        'subtitle': 'Travel Blogger',
        'color': '#E67E22'
    },
    'public/images/testimonial/img-2.jpg': {
        'size': (400, 400),
        'title': 'James Cooper',
        'subtitle': 'Surf Instructor',
        'color': '#34495E'
    },
    'public/images/testimonial/img-3.jpg': {
        'size': (400, 400),
        'title': 'Anna Schmidt',
        'subtitle': 'Backpacker',
        'color': '#9B59B6'
    },
    
    # Pricing Images - 600x400
    'public/images/pricing/1.jpg': {
        'size': (600, 400),
        'title': 'Economy Stay',
        'subtitle': '$28/Night',
        'color': '#16A085'
    },
    'public/images/pricing/2.jpg': {
        'size': (600, 400),
        'title': 'Deluxe Queen',
        'subtitle': '$32/Night',
        'color': '#2980B9'
    },
    'public/images/pricing/3.jpg': {
        'size': (600, 400),
        'title': 'Dormitory Bed',
        'subtitle': '$16/Night',
        'color': '#D35400'
    },
}

def hex_to_rgb(hex_color):
    """Convert hex color to RGB tuple"""
    hex_color = hex_color.lstrip('#')
    return tuple(int(hex_color[i:i+2], 16) for i in (0, 2, 4))

def create_image(filepath, size, title, subtitle, color):
    """Create a placeholder image with gradient and text"""
    width, height = size
    
    # Create image with base color
    rgb_color = hex_to_rgb(color)
    img = Image.new('RGB', (width, height), rgb_color)
    
    # Create a gradient effect by drawing rectangles
    draw = ImageDraw.Draw(img, 'RGBA')
    
    # Add semi-transparent overlay
    overlay_color = tuple(list(rgb_color) + [100])
    draw.rectangle([(0, 0), (width, height)], fill=overlay_color)
    
    # Calculate text position
    try:
        # Try to use a larger font, fallback to default
        title_font = ImageFont.load_default()
        subtitle_font = ImageFont.load_default()
    except:
        title_font = ImageFont.load_default()
        subtitle_font = ImageFont.load_default()
    
    # Draw text with white color
    text_color = (255, 255, 255)
    
    # Get text bbox to center it
    title_bbox = draw.textbbox((0, 0), title, font=title_font)
    title_width = title_bbox[2] - title_bbox[0]
    title_x = (width - title_width) // 2
    title_y = height // 2 - 30
    
    subtitle_bbox = draw.textbbox((0, 0), subtitle, font=subtitle_font)
    subtitle_width = subtitle_bbox[2] - subtitle_bbox[0]
    subtitle_x = (width - subtitle_width) // 2
    subtitle_y = height // 2 + 10
    
    # Draw text with shadow effect
    shadow_offset = 2
    draw.text((title_x + shadow_offset, title_y + shadow_offset), title, 
              font=title_font, fill=(0, 0, 0, 128))
    draw.text((title_x, title_y), title, font=title_font, fill=text_color)
    
    draw.text((subtitle_x + shadow_offset, subtitle_y + shadow_offset), subtitle, 
              font=subtitle_font, fill=(0, 0, 0, 128))
    draw.text((subtitle_x, subtitle_y), subtitle, font=subtitle_font, fill=text_color)
    
    # Save image
    img.save(filepath, 'JPEG', quality=85)
    print(f'✓ Created: {filepath}')

def main():
    """Generate all required images"""
    base_path = Path('.')
    
    # Create all necessary directories
    created_dirs = set()
    for image_path in IMAGES_TO_CREATE.keys():
        dir_path = base_path / Path(image_path).parent
        if str(dir_path) not in created_dirs:
            dir_path.mkdir(parents=True, exist_ok=True)
            created_dirs.add(str(dir_path))
    
    # Generate images
    print(f'Generating {len(IMAGES_TO_CREATE)} placeholder images...\n')
    
    for image_path, config in IMAGES_TO_CREATE.items():
        full_path = base_path / image_path
        create_image(
            str(full_path),
            config['size'],
            config['title'],
            config['subtitle'],
            config['color']
        )
    
    print(f'\n✓ Successfully generated {len(IMAGES_TO_CREATE)} images!')
    print('All images are placed in the correct directories.')

if __name__ == '__main__':
    main()
